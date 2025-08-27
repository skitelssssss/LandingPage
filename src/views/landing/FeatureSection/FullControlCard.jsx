import OfferCard from './OfferCard';
import Offer3 from 'assets/images/landing/offer/offer-3.png';

export default function FullControlCard() {
  return (
      <OfferCard
        title="Контролировать всё"
        caption="Отслеживайте заявки, сотрудников, материалы и статусы работ в реальном времени"
        image={Offer3}
      />
  );
}