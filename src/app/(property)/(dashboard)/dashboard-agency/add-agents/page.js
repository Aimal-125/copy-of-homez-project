import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboardAgency";
import AddPropertyTabContent from "@/components/property/dashboard/dashboard-add-agents-agency";
import AgentDataTable from "@/components/property/dashboard/dashboard-manage-agents/AgentDataTable";
import ExistingAgents from "./ExistingAgents";
import ExistingAgentsButton from "./ExistingAgentsButton";
import NewAgentButton from "./NewAgentButton";

export const metadata = {
  title: "Add Agents || Homez - Real Estate NextJS Template",
};

const DashboardAddProperty = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* dashboard_content_wrapper */}
      <div className="dashboard_content_wrapper">
        <div className="dashboard dashboard_wrapper pr30 pr0-md">
          <SidebarDashboard />
          {/* End .dashboard__sidebar */}

          <div className="dashboard__main pl0-md">
            <div className="dashboard__content property-page bgc-f7">
              <div className="row pb40 d-block d-lg-none">
                <div className="col-lg-12">
                  <DboardMobileNavigation />
                </div>
                {/* End .col-12 */}
              </div>
              {/* End .row */}

              <div className="row align-items-center pb40">
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Add Agents</h2>
                    <p className="text">We are glad to see you again!</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                    }}
                  >
                    <ExistingAgentsButton />
                    <NewAgentButton />
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row d-none" id="hide-div">
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 pt30 mb30 overflow-hidden position-relative">
                    <div className="navtab-style1">
                      <AddPropertyTabContent />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="hide-div-2">
                <div className="col-xl-12">
                  <div
                    style={{
                      minHeight: "20vh",
                      padding: "10px",
                    }}
                    className="ps-widget bgc-white bdrs12 default-box-shadow2 pt30 mb30 overflow-hidden position-relative"
                  >
                    <div className="navtab-style1">
                      <ExistingAgents />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "0 20px 20px 20px",
                        marginTop: "100px",
                      }}
                    >
                      <button
                        type="button"
                        className="ud-btn btn-thm"
                        style={{ width: "50%" }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End dashboard__content */}

            <Footer />
          </div>
          {/* End .dashboard__main */}
        </div>
      </div>
      {/* dashboard_content_wrapper */}
    </>
  );
};

export default DashboardAddProperty;
