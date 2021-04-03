import Head from 'next/head';
import { GetStaticProps } from 'next';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src='/images/avatar.svg' alt='' />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const PRICE_ID = 'price_1IbG1FH46qYk1Fbtf3Id0o8I';
  const price = await stripe.prices.retrieve(PRICE_ID);

  const product = {
    priceId: price.id,
    amount: Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
