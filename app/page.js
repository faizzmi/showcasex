import FeatureProjects from "@/components/HomePage/FeatureProjects";
import Introduction from "@/components/HomePage/Introduction";
import Skills from "@/components/HomePage/Skills";

export default function Home() {
  
  return (
    <>
      <div>
          <Introduction />
          <FeatureProjects />
          <Skills />
      </div>
    </>
  );
}
