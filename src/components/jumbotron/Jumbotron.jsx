import React from 'react'
import './jumbotron.css'
import Particles from "react-tsparticles";

function Jumbotron() {
    const particlesInit = (main) => {
        
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        
      };
    
    return (
        <div className='jumbotron'>
          <h1 className='herotext'>
            <span className="theweb">SIMPLE</span> 
	          <span className="stripes-top" aria-hidden="true"></span>
	          <span className="artisan">Facebook</span> 
	          <span className="stripes-bottom" aria-hidden="true"></span>
	          <span className="society">Scraper</span>
          </h1>
            {/* <Particles
                className='particles'
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    fullScreen: { enable: false },
                    particles: {
                      number: {
                        value: 50
                      },
                      shape: {
                        type: "circle"
                      },
                      opacity: {
                        value: 0.5
                      },
                      size: {
                        value: 400,
                        random: {
                          enable: true,
                          minimumValue: 200
                        }
                      },
                      move: {
                        enable: true,
                        speed: 10,
                        direction: "top",
                        outModes: {
                          default: "out",
                          top: "destroy",
                          bottom: "none"
                        }
                      }
                    },
                    interactivity: {
                      detectsOn: "canvas",
                      events: {
                        resize: true
                      }
                    },
                    style: {
                      filter: "blur(50px)"
                    },
                    detectRetina: true,
                    themes: [
                      {
                        name: "light",
                        default: {
                          value: true,
                          mode: "light"
                        },
                        options: {
                          background: {
                            color: "#f7f8ef"
                          },
                          particles: {
                            color: {
                              value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
                            }
                          }
                        }
                      },
                      {
                        name: "dark",
                        default: {
                          value: true,
                          mode: "dark"
                        },
                        options: {
                          background: {
                            color: "#080710"
                          },
                          particles: {
                            color: {
                              value: ["#004f74", "#5f5800", "#245100", "#7d0000", "#810c00"]
                            }
                          }
                        }
                      }
                    ],
                    emitters: {
                      direction: "top",
                      position: {
                        x: 50,
                        y: 150
                      },
                      rate: {
                        delay: 0.2,
                        quantity: 2
                      },
                      size: {
                        width: 100,
                        height: 0
                      }
                    }
                  }}
            >
               
            </Particles> */}
           
        </div>
    )
}

export default Jumbotron
