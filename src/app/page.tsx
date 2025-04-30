'use client'
import { Sidebar } from "@/componets/sidebar";
import { Header } from "@/componets/Header";
import { SyllabusAnalysis } from "@/componets/SyllabusAnalysis";
import { QuestionAnalysis } from "@/componets/QuestionAnalysis";
import Graph from "@/componets/Graph";
import HtmlComponent from "@/componets/HtmlComponent";
import QuickStats from "@/componets/QuickStats";
import { ScoreProvider } from "@/componets/ScoreContext";

export default function Home() {
  return (
    //using the score provider to provide the score context to the components 
    <ScoreProvider>
      <div className="flex min-h-screen bg-white">
        {/* using the sidebar component */}
        <div className="w-64 border-r border-gray-200 bg-white">
          <Sidebar />
        </div>

        {/* main component that has all the other components */}
        <div className="flex-1 bg-[#F8F9FA]">
          {/* header component */}
          <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
            <Header />
          </header>

          <main className="pt-16">
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-[22px] text-gray-700 font-medium">Skill Test</h1>
              </div>

              {/* components*/}
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8 space-y-8">
                  <div className="bg-white rounded-lg shadow-sm">
                    <HtmlComponent />
                  </div>

                  <div className="">
                    <QuickStats />
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-800 p-2">Comparison Graph</h2>
                    <p className="text-gray-600 mb-6">
                      <strong>You scored 30% percentile </strong> which is lower than the average percentile 72% of all the engineers who took this assessment
                    </p>
                    <div className="h-[300px]">
                      <Graph />
                    </div>
                  </div>
                </div>

                <div className="col-span-4 space-y-8">
                  <div className="">
                    <SyllabusAnalysis />
                  </div>

                  <div className="b">
                    <QuestionAnalysis />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ScoreProvider>
  );
}