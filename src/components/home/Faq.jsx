import CommonTitle from "../CommonTitle";
import Container from "../Container";
import faqs from "@/../public/data/faq.json";

export default function FaqComponent() {
  return (
    <section className="pt-24">
      <CommonTitle
        title={"Questions? We’re Here to Help"}
        subtitle={
          "Find answers to common questions about tasks, subscriptions, and earning money."
        }
      />
      <Container>
        <div className="border border-neutral/15 rounded-2xl max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="collapse bg-base-100 border-b border-b-neutral/15 rounded-b-none rounded-t-none first:rounded-t-2xl last:rounded-b-2xl"
            >
              <input
                type="checkbox"
                defaultChecked={faq.id === 1}
                className="peer"
              />
              <div className="collapse-title font-semibold peer-checked:text-primary transition-all">
                {faq.question}
              </div>
              <div className="collapse-content text-sm">{faq.answer}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
