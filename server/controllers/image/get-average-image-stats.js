import asyncHandler from 'express-async-handler';
import { Image } from './../../models/index.js';
import moment from 'moment';

export default asyncHandler(async (req, res) => {
  try {
    const startDate = moment().startOf('isoWeek');
    const endDate = moment().endOf('isoWeek');

    const images = await Image.find({
      taken_at: {
        $gte: startDate.toDate(),
        $lte: endDate.toDate()
      }
    }).sort({ taken_at: -1 });

    const averageFacesByDay = {};

    images.forEach((image) => {
      const day = moment(image.taken_at).format('dddd');

      if (!averageFacesByDay[day]) {
        averageFacesByDay[day] = {
          totalFaces: 0,
          count: 0
        };
      }

      averageFacesByDay[day].totalFaces += image.number_of_faces;
      averageFacesByDay[day].count += 1;
    });

    const result = {};
    const allDaysOfWeek = moment.weekdays();

    const sortedDaysOfWeek = allDaysOfWeek.slice(allDaysOfWeek.indexOf('Monday')).concat(allDaysOfWeek.slice(0, allDaysOfWeek.indexOf('Monday')));

    const data = [];
    const days = [];

    sortedDaysOfWeek.forEach((day) => {
      if (!averageFacesByDay[day]) {
        result[day] = 0;
      } else {
        const average = (averageFacesByDay[day].totalFaces / averageFacesByDay[day].count).toFixed(2);
        result[day] = parseFloat(average);
      }

      days.push(day);
      data.push(result[day]);
    });

    const totalAverage = Object.values(result).reduce((sum, value) => sum + value, 0) / Object.keys(result).length;
    result.totalAverage = totalAverage.toFixed(2);

    const finalResult = {
      data: data,
      days: days,
      total_average: result.totalAverage
    };

    res.json(finalResult);
  } catch (error) {
    console.error('Error retrieving and processing images from the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
