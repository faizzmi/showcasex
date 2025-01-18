import FeatureProjects from "@/components/HomePage/FeatureProjects";
import Introduction from "@/components/HomePage/Introduction";

export default function Home() {
  console.log(`

                                                 ▒▒▒                                                
                                               ░░    ▒  ░░   ▒                                      
                                              ░░      ░░      ░                                     
                                              ░      ▒░       ░░░░   ░░                             
                                        ░░░░░░░     ░ ░     ░▒        ░                             
                                       ░      ▒░    ░ ░    ░░░       ▒                              
                                ░▒▒▒▒░ ░       ░░░ ░ ░    ░ ░       ░                               
                                ░      ░░▒░    ░░░░░░░  ░░ ░░     ░▒░    ░░                         
                                 ░░     ░░  ░░  ░▒░░░░░░░ ░░  ░░░░        ░                         
                                  ░░      ░░░░░░▒▒▒▒▒▒▒▒▒░  ░░░░        ░░                          
                                    ░▒░░▒░░░  ░▒▒▒▒▒▒▒▒▒▒▒▒▒░         ░░                            
                               ░▒░      ▒▒░░░ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒░ ░▒▒░▒▒▒▒░                             
                              ░                ▒▒▒▒▒▒▒▒▒▒▒░  ░░░        ░░                          
                               ░░           ░░░░ ░░░ ▒▒░░  ░  ░░          ░                         
                                  ░░░░░░░░░▒░░░ ░░░░ ▒▒  ▒   ░░░▒░░░ ░░░░░                          
                                         ░░     ░ ░ ░░░░ ░░      ▒                                  
                                        ░       ░▒  ░ ░ ░░        ░                                 
                                        ░       ░▒   ░▒  ▒░       ░                                 
                                        ░     ░░  ░  ░▒ ░  ░░░░ ░░                                  
                                        ░░░░░░     ░░░▒░                                            
                                                    ░ ▒                                             
                                                   ░  ░                                             
                                                     ▒                                              
                                                                                                    
    Hi, I am Faiz, Welcome to my portfolio~
  `);
  
  return (
    <>
      <div>
          <Introduction />
          <FeatureProjects />
      </div>
    </>
  );
}
