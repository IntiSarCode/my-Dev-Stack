import React, { useState } from "react";
import technologies from "../data/technologies.json";

const TechnologySection = () => {
  const [selectedTech, setSelectedTech] = useState(["Svelte", "Redis"]);

  const addToStack = (tech) => {
    if (!selectedTech.includes(tech.name)) {
      setSelectedTech([...selectedTech, tech.name]);
    }
  };

  const removeFromStack = (name) => {
    setSelectedTech(
      selectedTech.filter((techName) => techName !== name)
    );
  };

  const removeAll = () => {
    setSelectedTech([]);
  };

  return (
    <section className="technology-section">
      <div className="technology-container">

        <div className="technology-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        
        <div className="technology-layout">

          
          <div className="technology-grid">

            {technologies.map((tech) => (
              <div className="technology-card" key={tech.id}>

                <div className="card-top">

                  <div className="tech-icon">
                    {tech.icon ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                      />
                    ) : (
                      <div className="empty-icon"></div>
                    )}
                  </div>

                  {tech.badge && (
                    <span className="tech-badge">
                      {tech.badge}
                    </span>
                  )}

                </div>

        
                <h3>{tech.name}</h3>

               
                <p className="tech-description">
                  {tech.description}
                </p>

                
                <div className="tech-info">

                  <span>{tech.category}</span>

                  <span>{tech.difficulty}</span>

                  <span className="rating">
                     {tech.rating}
                  </span>

                </div>

               
                <button
                  className="add-stack-btn"
                  onClick={() => addToStack(tech)}
                >
                  {selectedTech.includes(tech.name)
                    ? "Added to Stack"
                    : "Add to Stack"}
                </button>

              </div>
            ))}

          </div>

          
          <aside className="your-stack">

            <h3>Your Stack</h3>

            <p className="selected-count">
              {selectedTech.length} Technology Selected
            </p>

            <div className="selected-list">

              {selectedTech.length === 0 ? (
                <p className="empty-stack">
                  No technologies selected
                </p>
              ) : (
                selectedTech.map((name) => {

                  const tech = technologies.find(
                    (item) => item.name === name
                  );

                  return (
                    <div
                      className="selected-item"
                      key={name}
                    >

                      <div className="selected-left">

                        <div className="small-icon">
                          {tech?.icon ? (
                            <img
                              src={tech.icon}
                              alt={name}
                            />
                          ) : (
                            <div className="empty-small-icon"></div>
                          )}
                        </div>

                        <span>{name}</span>

                      </div>

                      <button
                        className="remove-item"
                        onClick={() => removeFromStack(name)}
                      >
                        ×
                      </button>

                    </div>
                  );
                })
              )}

            </div>

            <button
              className="remove-all-btn"
              onClick={removeAll}
            >
              Remove All
            </button>

          </aside>

        </div>
      </div>
    </section>
  );
};

export default TechnologySection;