import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/client';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const [session] = useSession();

  const handleSubscribe = () => {
    if (!session) {
      signIn('github');
      return;
    }
  };

  return (
    <button
      type='button'
      className={styles.subscribeButton}
      onClick={handleSubscribe}>
      Subscribe now
    </button>
  );
};
