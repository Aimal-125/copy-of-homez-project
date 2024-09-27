import Image from "next/image";
import Link from "next/link";
import UserRegisterForm from "./RegisterForm";

const UserRegisterPage = () => {
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
                  <UserRegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserRegisterPage;
