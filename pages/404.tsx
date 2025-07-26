import animationData from "@/json/lottie/404.json";
import Wrapper from "@/layout/wrapper/Wrapper";
import styles from "@/styles/pages/404.module.scss";
import Lottie from "lottie-react";
import Link from "next/link";

const Index = () => (
  <Wrapper>
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Page not found</h1>
        <Lottie
          className="errorPage_image"
          animationData={animationData}
          loop
          style={{
            height: 300,
            width: 300
          }}
          height={300}
          width={300}
        />
        <Link href="/">Back to home </Link>
      </div>
    </div>
  </Wrapper>
);

export default Index;
