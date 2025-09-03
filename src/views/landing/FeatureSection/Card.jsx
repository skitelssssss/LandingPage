import OfferCard from './OfferCard';
import Offer2 from 'assets/images/landing/offer/offer-2.png';
import Offer3 from 'assets/images/landing/offer/offer-3.png';
import Offer4 from 'assets/images/landing/offer/offer-4.png';
import Offer1 from 'assets/images/landing/offer/offer-1.png';

export const cards = [
  {
    title: "Избежать ошибок",
    caption: "Прозрачные процессы и цифровые чек-листы минимизируют человеческий фактор",
    image: Offer2
  },
  {
    
  }
]
export function AvoidMistakesCard() {
  return (
      <OfferCard
        title="Избежать ошибок"
        caption="Прозрачные процессы и цифровые чек-листы минимизируют человеческий фактор"
        image={Offer2}
      />
  );
}

export function FullControlCard() {
  return (
      <OfferCard
        title="Контролировать всё"
        caption="Отслеживайте заявки, сотрудников, материалы и статусы работ в реальном времени"
        image={Offer3}
      />
  );
}

export function IncreasedLoyaltyCard() {
  return (
      <OfferCard
        title="Повысить лояльность клиентов"
        caption="Быстрое реагирование, фотофиксация и опросы после обслуживания"
        image={Offer4}
      />
  );
}

export function SavingTimeCard() {
  return (
      <OfferCard
        title="Сэкономить время"
        caption="Автоматизация сокращает время на оформление и выполнение заказов"
        image={Offer1}
      />
  );
}