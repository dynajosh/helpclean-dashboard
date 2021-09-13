import React from "react";
import "./AboutSection.css";
import Lottie from "react-lottie";
import authentication from "../../lottie-jsons/authentication.json";
import transaction from "../../lottie-jsons/transaction.json";
import credit from "../../lottie-jsons/credit.json";
import verify from "../../lottie-jsons/verify.json";
import balance from "../../lottie-jsons/balance.json";
import income from "../../lottie-jsons/‌income.json";
import identity from "../../lottie-jsons/identity.json";
import debit from "../../lottie-jsons/debit.json";
import friends from "../../lottie-jsons/friends.json";
import spending from "../../lottie-jsons/spending.json";
import { useMediaQuery } from "react-responsive";

export default function AboutSection() {
  const lottieMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: authentication,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const transactionsOptions = {
    loop: true,
    autoplay: true,
    animationData: transaction,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const creditOptions = {
    loop: true,
    autoplay: true,
    animationData: credit,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const verifyOptions = {
    loop: true,
    autoplay: true,
    animationData: verify,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const balanceOptions = {
    loop: true,
    autoplay: true,
    animationData: balance,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const incomeOptions = {
    loop: true,
    autoplay: true,
    animationData: income,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const identityOptions = {
    loop: true,
    autoplay: true,
    animationData: identity,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const debitOptions = {
    loop: true,
    autoplay: true,
    animationData: debit,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const friendsOptions = {
    loop: true,
    autoplay: true,
    animationData: friends,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const spendingOptions = {
    loop: true,
    autoplay: true,
    animationData: spending,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="about-section">
      <div className="about-section--header">
        <h3>What we can help you do</h3>
        <h1>What's One Bridge About?</h1>
      </div>
      <div className="services">
        <div className="card card-one">
          <div className="card-number card-number-one">
            <p>1</p>
          </div>
          <div className="card-content">
            <div className="card-text">
              <div className="card-heading">
                <h1>Authentication</h1>
              </div>
              <div className="card-p">
                <p>
                  Verify your customers bank access credentials and know who
                  they are
                </p>
              </div>
            </div>
            <Lottie
              options={defaultOptions}
              height={"auto"}
              width={lottieMobile ? "100%" : "400px"}
            />
          </div>
        </div>
        <div className="grid-card">
          <div className="flex-card">
            <div className="card card-two">
              <div className="card-number card-number-two">
                <p>2</p>
              </div>
              <div className="card-content-column">
                <div className="card-text">
                  <div className="card-heading">
                    <h1>Transactions</h1>
                  </div>
                  <div className="card-p">
                    <p>
                      Get a list of your customers transactions up to 2 years
                      old.
                    </p>
                  </div>
                </div>
                <Lottie
                  options={transactionsOptions}
                  height={"auto"}
                  width={lottieMobile ? "100%" : "400px"}
                />
              </div>
            </div>
            <div className="card card-three">
              <div className="card-number card-number-three">
                <p>3</p>
              </div>
              <div className="card-content-column">
                <div className="card-text">
                  <div className="card-heading">
                    <h1>Credit Scoring</h1>
                  </div>
                  <div className="card-p">
                    <p>
                      For your loan services, our machine learning models can
                      offer credit scoring to you based on your customer’s data.
                    </p>
                  </div>
                </div>
                <Lottie
                  options={creditOptions}
                  height={"auto"}
                  width={lottieMobile ? "100%" : "400px"}
                />
              </div>
            </div>
          </div>
          <div className="flex-card">
            <div className="card card-four">
              <div className="card-number card-number-four">
                <p>4</p>
              </div>
              <div className="card-content-column">
                <div className="card-text">
                  <div className="card-heading">
                    <h1>Verify Card Ownership</h1>
                  </div>
                  <div className="card-p">
                    <p>
                      Reduce internet banking fraud on your platform by
                      verifying that your customer’s own the cards they use to
                      pay you.
                    </p>
                  </div>
                </div>
                <Lottie
                  options={verifyOptions}
                  height={"auto"}
                  width={lottieMobile ? "100%" : "400px"}
                />
              </div>
            </div>
            <div className="card card-five">
              <div className="card-number card-number-five">
                <p>5</p>
              </div>
              <div className="card-content-column">
                <div className="card-text">
                  <div className="card-heading">
                    <h1>Balance</h1>
                  </div>
                  <div className="card-p">
                    <p>
                      Get realtime balance update and notification on your
                      customers.
                    </p>
                  </div>
                </div>
                <Lottie
                  options={balanceOptions}
                  height={"auto"}
                  width={lottieMobile ? "100%" : "400px"}
                />
              </div>
            </div>
          </div>
          <div className="flex-card">
            <div className="card card-six">
              <div className="card-number card-number-six">
                <p>6</p>
              </div>
              <div className="card-content-column">
                <div className="card-text">
                  <div className="card-heading">
                    <h1>Income</h1>
                  </div>
                  <div className="card-p">
                    <p>Know your customer’s liquidity level and income flow.</p>
                  </div>
                </div>
                <Lottie
                  options={incomeOptions}
                  height={"auto"}
                  width={lottieMobile ? "100%" : "400px"}
                />
              </div>
            </div>
            <div className="card card-seven">
              <div className="card-number card-number-seven">
                <p>7</p>
              </div>
              <div className="card-content-column">
                <div className="card-text">
                  <div className="card-heading">
                    <h1>Identity</h1>
                  </div>
                  <div className="card-p">
                    <p>Run KYC on your customers to verify their identity.</p>
                  </div>
                </div>
                <Lottie
                  options={identityOptions}
                  height={"auto"}
                  width={lottieMobile ? "100%" : "400px"}
                />
              </div>
            </div>
          </div>
          <div className="flex-card">
            <div className="card card-eight">
              <div className="card-number card-number-eight">
                <p>8</p>
              </div>
              <div className="card-content-column">
                <div className="card-text">
                  <div className="card-heading">
                    <h1>Direct Debits</h1>
                  </div>
                  <div className="card-p">
                    <p>
                      Get paid easily by your customers with our direct debit
                      feature.
                    </p>
                  </div>
                </div>
                <Lottie
                  options={debitOptions}
                  height={"auto"}
                  width={lottieMobile ? "100%" : "400px"}
                />
              </div>
            </div>
            <div className="card card-nine">
              <div className="card-number card-number-nine">
                <p>9</p>
              </div>
              <div className="card-content-column">
                <div className="card-text">
                  <div className="card-heading">
                    <h1>Beneficiaries</h1>
                  </div>
                  <div className="card-p">
                    <p>
                      Get a list of beneficiaries on your customer’s account.
                    </p>
                  </div>
                </div>
                <Lottie
                  options={friendsOptions}
                  height={"auto"}
                  width={lottieMobile ? "100%" : "400px"}
                />
              </div>
            </div>
          </div>
          <div className="flex-card">
            <div className="card card-ten">
              <div className="card-number card-number-ten">
                <p>10</p>
              </div>
              <div className="card-content-column">
                <div className="card-text">
                  <div className="card-heading">
                    <h1>Spending Patterns</h1>
                  </div>
                  <div className="card-p">
                    <p>
                      Customize the services you offer to your customers using
                      their spending patterns to help create products that serve
                      them well.
                    </p>
                  </div>
                </div>
                <Lottie
                  options={spendingOptions}
                  height={"auto"}
                  width={lottieMobile ? "100%" : "400px"}
                />
              </div>
            </div>
            <div className="dummy-card"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
