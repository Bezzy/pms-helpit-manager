import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import {For, createSignal, Show} from "solid-js";

// Data
import ParcoursTable from "~/data/parcours_table";

export default function Home() {

  let AppState = {
    CurrentSelectedParcours : 64,
  }

  let [CurrentSelectedParcoursId, setCurrentSelectedParcoursId] = createSignal(null);
  let [CurrentSelectedParcoursTable, SetCurrentSelectedParcoursTable] = createSignal({
    "ref": "undefined",
    "date": "undefined",
    "names": "undefined",
    "users": "undefined",
    "id": "undefined"
  });

  function SelectCurrentParcours(Id) {
    for(let idx = 0; idx < ParcoursTable.length; idx++) {
      if (ParcoursTable[idx].id === Id) {
        SetCurrentSelectedParcoursTable(ParcoursTable[idx]);
      }
    }
    setCurrentSelectedParcoursId(Id);
  }

  return (
    <main class="pt-[96px] bg-[#757575]/[0.4] h-full pl-[8px] pr-[8px] pb-[8px] flex flex-col">
        <h1 class="text-[24px]">Liste des parcours</h1>
        <div class="w-[100%] flex flex-1 gap-[8px] min-h-[0]">
          <div class="p-[8px] bg-[#F6F6F6]/[0.5] rounded-[4px] basis-1/2 flex flex-col overflow-y-scroll cursor-pointer">
              <For each={ParcoursTable}>
                {(item, index) => {
                  let IsIndexPair = (index() % 2) === 0 ? true : false;
                  console.log(IsIndexPair);
                  return (
                  <div 
                    classList={
                      {
                        "text-gray-900": CurrentSelectedParcoursId() !== item.id,
                        "bg-gray-300": IsIndexPair && CurrentSelectedParcoursId() !== item.id,
                        "bg-blue-800 text-blue-200": CurrentSelectedParcoursId() === item.id,
                      }
                    }
                    onClick={() => SelectCurrentParcours(item.id)}
                  >
                    <h1>Réf: <span class="font-black">PC-478</span></h1>
                    <h1>Date d'ouverture du dossier: <span class="font-black">{new Date(item.date * 1000).toUTCString()}</span></h1>
                    <h1>Bénéficiaire(s) impliqué(s): <span class="underline text-sky-500">Amina Diallo</span>, <span class="underline text-sky-500">Ibrahim Diallo</span></h1>
                    <h1>Référent(s): <span class="underline text-sky-500">Mohamed Buzyarsest</span></h1>
                  </div>
                )
                }}
              </For>
          </div>
          <div class="p-[8px] bg-[#F6F6F6]/[0.5] rounded-[4px]  basis-1/2">
            <Show
            when={CurrentSelectedParcoursId() !== null}
            fallback={"Aucun parcours n'est séléctionné"}
            >
              <h1 class="text-[32px]">Action d'accompagnement réf {CurrentSelectedParcoursTable().ref}</h1>
              <div class="flex gap-[8px]">
                <button class="h-[32px] bg-[#FFFFFF]/[0.7] rounded-[3px] border-[1px] border-black/[0.16] text-[14px] min-w-[111px] px-[8px]">Filtrer</button>
                <button class="h-[32px] bg-[#FFFFFF]/[0.7] rounded-[3px] border-[1px] border-black/[0.16] text-[14px] min-w-[111px] px-[8px]">Trier par</button>
                <button class="h-[32px] bg-[#FFFFFF]/[0.7] rounded-[3px] border-[1px] border-black/[0.16] text-[14px] min-w-[111px] px-[8px]">Customiser les colonnes</button>
                <input class=" flex-1 h-[32px] bg-[#FFFFFF]/[0.7] rounded-[3px] border-[1px] border-black/[0.16] text-[14px] min-w-[111px] px-[8px]"></input>
              </div>
              

              <table class="text-left w-full">
    <thead class="bg-black flex text-white w-full">
      <tr class="flex w-full mb-4">
        <th class="p-4 w-1/4">One</th>
        <th class="p-4 w-1/4">Two</th>
        <th class="p-4 w-1/4">Three</th>
        <th class="p-4 w-1/4">Four</th>
      </tr>
    </thead>
    <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style="height: 50vh;">
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
      <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
            <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
            <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
            <tr class="flex w-full mb-4">
        <td class="p-4 w-1/4">Dogs</td>
        <td class="p-4 w-1/4">Cats</td>
        <td class="p-4 w-1/4">Birds</td>
        <td class="p-4 w-1/4">Fish</td>
      </tr>
    </tbody>
  </table>


            </Show>
          </div>
        </div>
    </main>
  );
}
