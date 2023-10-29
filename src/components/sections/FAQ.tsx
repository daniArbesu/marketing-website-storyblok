import { Faq } from '../../../types';

interface Props {
  title: string;
  faq_cards: Faq[];
}

interface CardProps {
  data: Faq;
}

const FAQ: React.FC<Props> = ({ title, faq_cards }) => {
  return (
    <section className="bg-zinc-950 px-52 pb-36 pt-20">
      <h2 className="mb-20 text-center text-4xl font-bold">{title}</h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {faq_cards.map((f) => (
          <FAQCard data={f} key={f.question} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;

const FAQCard: React.FC<CardProps> = ({ data }) => {
  const { question, answer } = data;
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-neutral-800 px-5 py-5">
        <h3 className="pb-2 text-2xl text-gray-400">{question}</h3>
        <p className="text-xl leading-normal">{answer}</p>
      </div>
    </div>
  );
};
