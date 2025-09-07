import Image from "next/image";
import carte from '../../assets/img/carte.png';

export default function LorePage() {
  return (
    <main class="lore-page">
      <h1 class="page-title">Lore</h1>
      <p>
        À travers cette page, vous découvrirez les fragments d’histoire, les
        mythes et les légendes qui nourrissent la trame du récit. Plus précisemment, le passé et le contexte politique du monde actuel.
      </p>

      <p>
        Il existe 7 régions au sein de l'Entre Terre : Nécrolimbe, Liurna, Caelid, Plateau Altus, Mont Gelmir, le Pic des géants et l'Arbre Sacré. Ce sont les 7 régions connus bien qu'il en existe d'autres cachés, tel que les souterains ou encore Farum Azula. Chacune de ce régions sont dirigés par des êtres fantastiques aux pouvoirs impressionants. Certains cherchent à devenir seigneur de l'Entre Terre, d'autres à renverser les anciens dieux. 
      </p>

    <table class="lore-table">
        <thead>
            <tr>
            <th colspan="3">Nécrolimbe</th>
            </tr>
            <tr>
            <th>Dirigeant</th>
            <th>Frontière</th>
            <th>Place Forte</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Godrick le greffé</td>
            <td>Liurna au nord, Caelid à l'est</td>
            <td>Voilorage</td>
            </tr>
        </tbody>
    </table>

       <table class="lore-table">
        <thead>
            <tr>
            <th colspan="3">Liurnia, contrée l'acustre</th>
            </tr>
            <tr>
            <th>Dirigeant</th>
            <th>Frontière</th>
            <th>Place Forte</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Rennala reine de la pleine lune</td>
            <td>Plateau Altus au nord, Nécrolimbe au sud</td>
            <td>Académie de Raya Lucaria, Manoir de Caria</td>
            </tr>
        </tbody>
    </table>

       <table class="lore-table">
        <thead>
            <tr>
            <th colspan="3">Caelid</th>
            </tr>
            <tr>
            <th>Dirigeant</th>
            <th>Frontière</th>
            <th>Place Forte</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Radhan, le fléau des astres</td>
            <td>Nécrolimbe à l'ouest</td>
            <td>Chateau du lion rouge</td>
            </tr>
        </tbody>
    </table>

       <table class="lore-table">
        <thead>
            <tr>
            <th colspan="3">Plateau Altus</th>
            </tr>
            <tr>
            <th>Dirigeant</th>
            <th>Frontière</th>
            <th>Place Forte</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Morgott le réprouvé</td>
            <td>Mont Gelmir à l'ouest, Liurna au sud, Pic des géants à l'est</td>
            <td>Capitale Leyndell</td>
            </tr>
        </tbody>
    </table>

       <table class="lore-table">
        <thead>
            <tr>
            <th colspan="3">Pic des géants</th>
            </tr>
            <tr>
            <th>Dirigeant</th>
            <th>Frontière</th>
            <th>Place Forte</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Géant de feu</td>
            <td>Plateau Altus à l'ouest, Arbre sacré au nord</td>
            <td>La forge des géant</td>
            </tr>
        </tbody>
    </table>

       <table class="lore-table">
        <thead>
            <tr>
            <th colspan="3">Arbre sacré</th>
            </tr>
            <tr>
            <th>Dirigeant</th>
            <th>Frontière</th>
            <th>Place Forte</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Miquella le clément</td>
            <td>Pic des géants au sud</td>
            <td>Ephael</td>
            </tr>
        </tbody>
    </table>

     <div class="lore-carte">
        <h2>Carte du monde</h2>
        <Image  src={carte} alt="Carte du monde"/>
    </div> 
    </main>
  );
}
