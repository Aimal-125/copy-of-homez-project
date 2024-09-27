import MobileMenu from "../../../components/common/mobile-menu";
import Header from "../../../components/home/home-v3/Header";
import Hero from "../../../components/home/home-v3/hero";
import Footer from "@/components/common/default-footer";
import Image from "next/image";
import Partner from "@/components/common/Partner";
import PropertyByCities from "@/components/home/home-v3/PropertyByCities";
import ApartmentType from "../../../components/home/home-v1/ApartmentType";
import ApartmentType2 from "@/components/home/home-v2/ApartmentType";
import WhyChoose from "@/components/home/home-v3/why-choose";
import Testimonial from "../../../components/home/home-v1/Testimonial";
import Funfact from "@/components/home/home-v3/Funfact";
import Blog from "../../../components/common/Blog";
import Cta from "../../../components/home/home-v6/Cta";
import Cta2 from "../../../components/home/home-v3/Cta";
import InqueryForm from "@/components/home/home-v3/InqueryForm";
import Link from "next/link";
import PropertyByCitiesWrapper from "../../../components/home/home-v3/PropertyByCitiesWrapper";
import PropertiesByCities from "../../../components/home/home-v1/PropertiesByCities";
import FindHomeBlock from "../../../components/home/home-v6/FindHomeBlock";
import Agents from "../../../components/home/home-v6/Agents";
import Explore from "../../../components/home/home-v2/Explore";

export const metadata = {
  title: "Home || Real Estate",
};

const Home_V3 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V3 */}
      <section className="home-banner-style3 p0">
        <div className="home-style3">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <Hero />
              </div>
              {/* End .col-xl-8 */}

              <div className="col-xl-4 d-none d-xl-block">
                <div className="home3-img-box1">
                  <Image
                    width={351}
                    height={600}
                    className="img-1"
                    src="/images/about/h31.png"
                    alt="about"
                  />
                  <Image
                    width={270}
                    height={300}
                    className="img-2"
                    src="/images/about/h32.png"
                    alt="about"
                  />
                  <Image
                    width={270}
                    height={300}
                    className="img-3"
                    src="/images/about/h33.png"
                    alt="about"
                  />
                  <Image
                    width={276}
                    height={146}
                    className="img-4 default-box-shadow1 bounce-y"
                    src="/images/about/about-1.png"
                    alt="about"
                  />
                </div>
              </div>
              {/* End .col-xl-4 */}
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V3 */}

      {/* Explore Apartment Home-v1 */}
      <section id="explore-property" className="pb90 pb30-md">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">Explore Apartment Types</h2>
                <p className="paragraph">
                  Get some Inspirations from 1800+ skills
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="explore-apartment-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <ApartmentType />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment Home-v1 */}

      {/* Explore Apartment Home-v2 */}
      <section className="p-0">
        <div className="how-we-help position-relative mx-auto bgc-thm-light maxw1600 pt120 pt60-md pb90 pb30-md bdrs12 mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 m-auto wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="main-title text-center">
                  <h2 className="title">See How Realton Can Help</h2>
                  <p className="paragraph">
                    Aliquam lacinia diam quis lacus euismod
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <Explore />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment Home-v2 */}

      {/* Popular Property */}
      <PropertyByCitiesWrapper title={`Discover Featured Properties`} />
      {/* Popular Property */}

      {/* Explore property-city Home-v1 */}
      <section className="pb40-md" style={{ padding: "0" }}>
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Properties by Cities</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End col-lg-9 */}

            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <a className="ud-btn2" href="#">
                  See All Cities
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
            {/* End col-lg-3 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative">
                <PropertiesByCities />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore property-city Home-v1 */}

      {/* Popular Property */}
      <PropertyByCitiesWrapper title={`Discover Popular Properties`} />
      {/* Popular Property */}

      {/* Explore Apartment Home-v6 */}
      <section className="pb90 pb30-md" style={{ padding: "0" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="100">
              <div className="about-box2">
                <h4 className="title">
                  The New Way to Find <br className="d-none d-xl-block" /> Your
                  Home
                </h4>
                <p className="text fz15">
                  From as low as $10 per day with{" "}
                  <br className="d-none d-xl-block" /> limited time offer
                  discounts.
                </p>
                <Link href="/grid-full-1-col-v1" className="ud-btn btn-thm">
                  How İt Works
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Image
                  width={240}
                  height={300}
                  className="img-1 cover"
                  src="/images/about/woman.jpg"
                  alt="about"
                />
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
              <div className="row">
                <FindHomeBlock />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Apartment Home-v6 */}

      {/* Our Testimonials Home-v1 */}
      <section className="pb100 pb50-md bgc-thm-light">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">People Love Living with Realton</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="testimonila_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination testimonila_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="testimonila_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Testimonials Home-v1 */}

      {/* Explore Blog */}
      <section className="mb35 mb0-md pb30-md">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="main-title text-start text-md-center">
                <h2 className="title">From Our Blog</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Explore Blog */}

      {/* Our CTA Home-v6 */}
      <Cta />
      {/* Our End CTA Home-v6 */}

      {/* Exclusive Agents Home-v6 */}
      <section className="pt0 pb100 pb50-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title" style={{ marginTop: "150px" }}>
                  Our Exclusive Agents
                </h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="agent_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination agent_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="agent_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Exclusive Agents Home-v6 */}

      {/* Our CTA Home-v3 */}
      <Cta2 />
      {/* Our End CTA Home-v3 */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V3;
