import { useState } from "react";
import "./GetFavorites.css";

const GetFavorites = () => {
  const [activeTab, setActiveTab] = useState(0); // Estado para la pestaña activa

  const tabs = [
    { id: "tabs-tab0", label: "25", panelId: "tabs-tabpanel-1" },
    { id: "tabs-tab1", label: "100", panelId: "tabs-tabpanel-2" },
    { id: "tabs-tab2", label: "200", panelId: "tabs-tabpanel-3" },
    { id: "tabs-tab3", label: "300", panelId: "tabs-tabpanel-4" },
    { id: "tabs-tab4", label: "400", panelId: "tabs-tabpanel-5" },
  ];

  return (
    <div className="global-get-favorites">
      <div className="px3">
        <h2 className="sb-heading1">Get your favorites for free</h2>
      </div>
      <div>
        <div
          aria-owns="tabs-tab0 tabs-tab1"
          className="tab-list"
          role="tablist"
          aria-label="Reward levels"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className="sbtabs-1"
              aria-controls={tab.panelId}
              aria-selected={activeTab === index ? "true" : "false"}
              id={tab.id}
              role="tab"
              tabIndex={activeTab === index ? 0 : -1}
              onClick={() => setActiveTab(index)}
            >
              <span className="text-md">
                {tab.label}
                <span aria-hidden="true" className="color-gold">
                  ★
                </span>
                <span className="hiddenVisually">Stars</span>
              </span>
              <div className="slider"></div>
            </button>
          ))}
        </div>

        {/* Contenido dinámico según la pestaña activa */}
        <div className="bg-green">
          <div id="tabs-content">
            {activeTab === 0 && (
              <div id="tabs-tabpanel-2" className="tab-panel">
                <div className="tab-justify-center">
                  <div className="tab-content">
                    <img
                      className="tab-image"
                      src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/25.png"
                      alt="25"
                    />

                    <div className="tab-content-section">
                      <h3 className="sb-heading1">Customize your drink</h3>
                      <p className="p-tabs1">
                        Make your drink just right with an extra
                        espresso shot or a dash of your favorite syrup.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-green">
          <div id="tabs-content">
            {activeTab === 1 && (
              <div id="tabs-tabpanel-1" className="tab-panel">
                <div className="tab-justify-center">
                  <div className="tab-content">
                    <img
                      className="tab-image"
                      src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png"
                      alt="100"
                    />

                    <div className="tab-content-section">
                      <h3 className="sb-heading1">Brewed hot or iced coffee or tea,<br></br>
                        bakery item, packaged snack and more</h3>
                      <p className="p-tabs1">
                        Treat yourself to an iced coffee,
                        buttery croissant, bag of chips and more.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-green">
          <div id="tabs-content">
            {activeTab === 2 && (
              <div id="tabs-tabpanel-2" className="tab-panel">
                <div className="tab-justify-center">
                  <div className="tab-content">
                    <img
                      className="tab-image"
                      src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png"
                      alt="200"
                    />

                    <div className="tab-content-section">
                      <h3 className="sb-heading1">Handcrafted drink
                        (Cold<br></br> Brew, lattes and more) or hot breakfast
                      </h3>
                      <p className="p-tabs1">
                        Turn good mornings great with a delicious
                        handcrafted drink of your choice, breakfast
                        sandwich or oatmeal on us.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-green">
          <div id="tabs-content">
            {activeTab === 3 && (
              <div id="tabs-tabpanel-3" className="tab-panel">
                <div className="tab-justify-center">
                  <div className="tab-content">
                    <img
                      className="tab-image"
                      src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png"
                      alt="300"
                    />

                    <div className="tab-content-section">
                      <h3 className="sb-heading1">Sandwich, protein
                        box or at-home coffee
                      </h3>
                      <p className="p-tabs1">
                        Enjoy a PM pick-me-up with a lunch sandwich,
                        protein box or a bag of coffee—including Starbucks VIA Instant®.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-green">
          <div id="tabs-content">
            {activeTab === 4 && (
              <div id="tabs-tabpanel-4" className="tab-panel">
                <div className="tab-justify-center">
                  <div className="tab-content">
                    <img
                      className="tab-image"
                      src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png"
                      alt="400"
                    />

                    <div className="tab-content-section">
                      <h3 className="sb-heading1">Select Starbucks® merchandise
                      </h3>
                      <p className="p-tabs1">
                        Take home a signature cup, drink tumbler or your choice
                        of coffee merch up to $20.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFavorites;


