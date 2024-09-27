import styles from "./agentRegister.module.css";
import Image from "next/image";
import Link from "next/link";

const AgentRegisterPage = () => {
  return (
    <>
      <section
        className="our-compare pt60 pb60"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Image
          width={1012}
          height={519}
          src="/images/icon/login-page-icon.svg"
          alt="logo"
          className="login-bg-icon contain"
          data-aos="fade-right"
          data-aos-delay="300"
        /> */}
        <div className="container">
          <div className="row" data-aos="fade-left" data-aos-delay="300">
            <div className="col-lg-6" style={{ margin: "0 auto" }}>
              <div
                className="log-reg-form signup-modal form-style1 bgc-white p50 p30-sm default-box-shadow2 bdrs12"
                style={{ boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="text-center mb40">
                  <Link href="/">
                    <Image
                      width={138}
                      height={44}
                      className="mb25"
                      src="/images/logo.png"
                      alt="logo"
                    />
                  </Link>
                  <form className={styles.userForm}>
                    <div className={styles.labelDiv}>
                      <label
                        htmlFor="user-name"
                        className="form-label fw600 dark-color"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="user-name"
                        style={{ width: "100%" }}
                        required
                      />
                    </div>
                    <div className={styles.labelDiv}>
                      <label
                        htmlFor="email"
                        className="form-label fw600 dark-color"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        className="form-control email"
                        id="email"
                        style={{ width: "100%" }}
                        required
                      />
                    </div>
                    <div className={styles.labelDiv}>
                      <label
                        htmlFor="password"
                        className="form-label fw600 dark-color"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="user_password"
                        className="form-control pass"
                        id="password"
                        style={{ width: "100%" }}
                        required
                      />
                    </div>
                    <div className={styles.labelDiv}>
                      <label
                        htmlFor="password"
                        className="form-label fw600 dark-color"
                      >
                        Re-enter Password
                      </label>
                      <input
                        type="password"
                        name="user_password"
                        className="form-control pass"
                        id="password"
                        style={{ width: "100%" }}
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="ud-btn btn-thm"
                        id="submit-btn"
                        style={{ width: "100%" }}
                      >
                        Sign up <i className="fal fa-arrow-right-long" />
                      </button>
                    </div>
                    <div>
                      <p className="dark-color text-center mb0 mt10">
                        Already have an account?{" "}
                        <a href="/agent-login" className="dark-color fw600">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentRegisterPage;
