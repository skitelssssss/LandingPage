import OfferCard from './OfferCard';
import Offer4 from 'assets/images/landing/offer/offer-4.png';

export default function IncreasedLoyaltyCard() {
  return (
      <OfferCard
        title="Повысить лояльность клиентов"
        caption="Быстрое реагирование, фотофиксация и опросы после обслуживания"
        image={Offer4}
      />
  );
}