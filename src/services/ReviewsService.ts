import moment from 'moment';
import type { IReview } from 'components/Review/index';

class ReviewsService {
  private static reviews: IReview[] = [
    {
      id: 1,
      author: 'Naruto Uzumaki',
      rating: 4.5,
      text: `Все хорошо, но в день - один, ну два подвига, не больше. <br/>
      Не бывает безвыходных ситуаций. Бывают ситуации, выход из которых тебя не устраивает.<br/>
      Никогда не сдаваться Встать, когда все рухнуло — вот настоящая сила.`,
      date: moment().add(-7, 'd'),
    },
    {
      id: 2,
      author: 'Sasuke Uchiha',
      rating: 5,
      text: `У тебя была мечта стать Хокаге? Если у тебя есть время бегать за мной, может, стоит больше тренироваться...<br/>
      А, Наруто?..<br/>
      Разве может тот, кто не спас товарища стать Хокаге?`,
      date: moment().add(-65, 'd'),
    },
    {
      id: 3,
      author: 'Kakashi Hatake',
      rating: 3.5,
      text: `Ты думаешь, что ты понял это, хотя на самом деле всего лишь думаешь, что ты понял то, о чем ты думаешь.<br/>
      Сколько бы иллюзий ты ни сочинил, они никогда не заполнят дыру в твоём сердце!<br/>
      Не будет трусостью отказаться от поставленной задачи. Трусостью будет не делать ничего.`,
      date: moment().add(-2, 'd'),
    }
  ];
  public static getReviews(): Promise<IReview[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(ReviewsService.reviews), 2500);
    });
  }
}

export default ReviewsService;
