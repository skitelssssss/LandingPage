import { LazyLoadImage } from "react-lazy-load-image-component";

import OfferCard from './OfferCard';
import Offer1 from 'assets/images/landing/offer/offer-1.png';

export default function SavingTimeCard() {
  return (
      <OfferCard
        title="Сэкономить время"
        caption="Автоматизация сокращает время на оформление и выполнение заказов"
        image={Offer1}
      />
  );
}