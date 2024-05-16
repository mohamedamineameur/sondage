import styles from "@/components/WelcomePage.module.css";
export const WelcomePage = () => {
  return (
    <div className={styles.div}>
      <h2>Bienvenue à notre sondage !</h2>

      <p>
        Nous apprécions votre participation. Vos réponses nous aideront à
        calculer votre score de maturité ESG (Environnement, Social,
        Gouvernance). Le sondage ne prendra que quelques minutes de votre temps.
      </p>
    </div>
  );
};
