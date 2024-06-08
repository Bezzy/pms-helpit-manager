import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="bg-[#757575]/[0.4] h-full pl-[8px] pr-[8px] pb-[8px] flex flex-col">
        <h1 class="text-[24px]">Liste des parcours</h1>
        <div class="div-that-is-useless-but-is-necessary-because-css-is-crap  w-[100%] flex flex-1 gap-[8px]">
          <div class="bg-[#F6F6F6]/[0.5] rounded-[4px] flex flex-1 basis-1/2 overflow-y-scroll">
            <div class="flex flex-col min-h-min">
              <div class="pl-[8px] bg-blue-800 rounded-[4px] text-blue-200">
                <h1>Réf: <span class="font-black">PC-478</span></h1>
                <h1>Date d'ouverture du dossier: <span class="font-black">29-05-204</span></h1>
                <h1>Bénéficiaire(s) impliqué(s): <span class="underline text-sky-500">Amina Diallo</span>, <span class="underline text-sky-500">Ibrahim Diallo</span></h1>
                <h1>Référent(s): <span class="underline text-sky-500">Mohamed Buzyarsest</span></h1>
              </div>
              <div class="pl-[8px] rounded-[4px] bg-gray-300 text-gray-900">
                <h1>Réf: <span class="font-black">PT-784</span></h1>
                <h1>Date d'ouverture du dossier: <span class="font-black">29-05-204</span></h1>
                <h1>Bénéficiaire(s) impliqué(s): <span class="underline text-sky-500">Benicio Del Toro</span>, <span class="underline text-sky-500">Lemaire Bertrand</span></h1>
                <h1>Référent(s): <span class="underline text-sky-500">Mohamed Buzyarsest</span></h1>
              </div>
              <div class="pl-[8px] rounded-[4px]">
                <h1>Réf: <span class="font-black">PT-784</span></h1>
                <h1>Date d'ouverture du dossier: <span class="font-black">29-05-204</span></h1>
                <h1>Bénéficiaire(s) impliqué(s): <span class="underline text-sky-500">Benicio Del Toro</span>, <span class="underline text-sky-500">Lemaire Bertrand</span></h1>
                <h1>Référent(s): <span class="underline text-sky-500">Mohamed Buzyarsest</span></h1>
              </div>
              <div class="pl-[8px] rounded-[4px] bg-gray-300 text-gray-900">
                <h1>Réf: <span class="font-black">PT-784</span></h1>
                <h1>Date d'ouverture du dossier: <span class="font-black">29-05-204</span></h1>
                <h1>Bénéficiaire(s) impliqué(s): <span class="underline text-sky-500">Benicio Del Toro</span>, <span class="underline text-sky-500">Lemaire Bertrand</span></h1>
                <h1>Référent(s): <span class="underline text-sky-500">Mohamed Buzyarsest</span></h1>
              </div>
              <div class="pl-[8px] rounded-[4px]">
                <h1>Réf: <span class="font-black">PT-784</span></h1>
                <h1>Date d'ouverture du dossier: <span class="font-black">29-05-204</span></h1>
                <h1>Bénéficiaire(s) impliqué(s): <span class="underline text-sky-500">Benicio Del Toro</span>, <span class="underline text-sky-500">Lemaire Bertrand</span></h1>
                <h1>Référent(s): <span class="underline text-sky-500">Mohamed Buzyarsest</span></h1>
              </div>
              <div class="pl-[8px] rounded-[4px] bg-gray-300 text-gray-900">
                <h1>Réf: <span class="font-black">PT-784</span></h1>
                <h1>Date d'ouverture du dossier: <span class="font-black">29-05-204</span></h1>
                <h1>Bénéficiaire(s) impliqué(s): <span class="underline text-sky-500">Benicio Del Toro</span>, <span class="underline text-sky-500">Lemaire Bertrand</span></h1>
                <h1>Référent(s): <span class="underline text-sky-500">Mohamed Buzyarsest</span></h1>
              </div>
              <div class="pl-[8px] rounded-[4px]">
                <h1>Réf: <span class="font-black">PT-784</span></h1>
                <h1>Date d'ouverture du dossier: <span class="font-black">29-05-204</span></h1>
                <h1>Bénéficiaire(s) impliqué(s): <span class="underline text-sky-500">Benicio Del Toro</span>, <span class="underline text-sky-500">Lemaire Bertrand</span></h1>
                <h1>Référent(s): <span class="underline text-sky-500">Mohamed Buzyarsest</span></h1>
              </div>
              <div class="pl-[8px] rounded-[4px] bg-gray-300 text-gray-900">
                <h1>Réf: <span class="font-black">PT-784</span></h1>
                <h1>Date d'ouverture du dossier: <span class="font-black">29-05-204</span></h1>
                <h1>Bénéficiaire(s) impliqué(s): <span class="underline text-sky-500">Benicio Del Toro</span>, <span class="underline text-sky-500">Lemaire Bertrand</span></h1>
                <h1>Référent(s): <span class="underline text-sky-500">Mohamed Buzyarsest</span></h1>
              </div>
            </div>
           
            
           
          </div>
          <div class="bg-[#F6F6F6]/[0.5] rounded-[4px]  basis-1/2">I'm a surface material yeah.</div>
        </div>
    </main>
  );
}
