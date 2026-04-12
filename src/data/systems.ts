export interface SystemFeature {
  label: string;
}

export interface System {
  id: string;
  tag: string;
  tagColor: 'accent' | 'brand' | 'green';
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  specs: { label: string; value: string }[];
  idealFor: string[];
  icon: string;
  highlighted?: boolean;
}

export const systems: System[] = [
  {
    id: 'nat-systeem',
    tag: 'Meest Populair',
    tagColor: 'accent',
    title: 'Nat Systeem',
    subtitle: 'Ingestort in natte dekvloer',
    description:
      'Het klassieke en meest gebruikte vloerverwarmingssysteem. De buizen worden gelegd op een isolatielaag en vervolgens ingestort in een natte dekvloer (cementdekvloer of aanhydrietdekvloer).',
    longDescription:
      'Het natte systeem is de gouden standaard in vloerverwarming. Door de buizen in de dekvloer te gieten ontstaat een perfecte thermische massa die de warmte gelijkmatig verdeelt over de volledige vloeroppervlakte. Dit systeem combineert optimaal met een warmtepomp of condensatieketel en zorgt voor het laagste energieverbruik.',
    features: [
      'Optimale warmteverdeling',
      'Laagste energieverbruik',
      'Ideaal voor warmtepomp',
      'Geschikt voor alle vloersoorten',
      'Hoge thermische massa',
      'Langste levensduur',
    ],
    specs: [
      { label: 'Opbouwhoogte', value: '8 – 12 cm' },
      { label: 'Installatietijd', value: '1 – 3 dagen' },
      { label: 'Droogtijd', value: '4 – 6 weken' },
      { label: 'Aanvoertemperatuur', value: '30 – 45 °C' },
      { label: 'Buisdiameter', value: '16 – 20 mm' },
      { label: 'Garantie', value: '10 jaar' },
    ],
    idealFor: ['Nieuwbouw', 'Grote renovaties', 'Warmtepompcombinatie', 'Vloeren op volle grond'],
    icon: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
    highlighted: true,
  },
  {
    id: 'droog-systeem',
    tag: 'Renovatievriendelijk',
    tagColor: 'brand',
    title: 'Droog Systeem',
    subtitle: 'Zonder natte dekvloer',
    description:
      'Het droge systeem maakt gebruik van speciale isolatiepanelen met voorgesneden groeven waarin de buizen worden gedrukt. Er is geen natte dekvloer nodig, waardoor de opbouwhoogte minimaal blijft.',
    longDescription:
      'Het droge systeem is de ideale keuze wanneer een natte dekvloer niet mogelijk of gewenst is. De isolatiepanelen met geïntegreerde buisgeleidingen zorgen voor een stabiele en efficiënte warmteverdeling. Na plaatsing kan er onmiddellijk een vloerplaat, laminaat of tegels op worden gelegd — geen lange droogtijden.',
    features: [
      'Minimale opbouwhoogte (3–5 cm)',
      'Geen droogtijd vereist',
      'Snel bewoonbaar',
      'Minder gewicht op vloer',
      'Eenvoudige installatie',
      'Compatibel met alle afwerkvloeren',
    ],
    specs: [
      { label: 'Opbouwhoogte', value: '3 – 5 cm' },
      { label: 'Installatietijd', value: '1 – 2 dagen' },
      { label: 'Droogtijd', value: 'Geen' },
      { label: 'Aanvoertemperatuur', value: '35 – 50 °C' },
      { label: 'Buisdiameter', value: '14 – 16 mm' },
      { label: 'Garantie', value: '10 jaar' },
    ],
    idealFor: ['Renovatieprojecten', 'Bestaande woningen', 'Beperkte opbouwhoogte', 'Bovenverdiepingen'],
    icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
    highlighted: false,
  },
  {
    id: 'freessysteem',
    tag: 'Meest Discreet',
    tagColor: 'green',
    title: 'Freessysteem (Infrezen)',
    subtitle: 'Gefreesd in bestaande vloer',
    description:
      'Sleuven worden machinaal gefreesd in de bestaande betonvloer. De verwarmingsbuizen worden in de sleuven gelegd en afgedicht. De vloer behoud zijn originele hoogte.',
    longDescription:
      'Het freessysteem is de meest ingrijpende maar tegelijk meest naadloze methode voor renovatieprojecten. Een freesmachine zaagt nauwkeurige sleuven in de bestaande betonnen ondervloer. De buizen worden erin gedrukt en de sleuven worden afgevuld met een geleidende mortel. Het resultaat? Nul verlies aan vloerhoogte en perfect verborgen buizen.',
    features: [
      'Nul verlies aan vloerhoogte',
      'Bestaande vloer onveranderd',
      'Minimale overlast & stof',
      'Compatibel met alle afwerking',
      'Snelste renovatieoptie',
      'Onzichtbaar eindresultaat',
    ],
    specs: [
      { label: 'Opbouwhoogte', value: '0 cm (geen)' },
      { label: 'Installatietijd', value: '1 – 2 dagen' },
      { label: 'Droogtijd', value: '24 – 48 uur' },
      { label: 'Aanvoertemperatuur', value: '40 – 55 °C' },
      { label: 'Sleufbreedte', value: '18 – 22 mm' },
      { label: 'Garantie', value: '10 jaar' },
    ],
    idealFor: ['Renovaties zonder hoogteverlies', 'Reeds afgewerkte ruimtes', 'Appartementen', 'Vervanging radiatoren'],
    icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z',
    highlighted: false,
  },
  {
    id: 'elektrisch',
    tag: 'Aanvullend',
    tagColor: 'accent',
    title: 'Elektrisch Systeem',
    subtitle: 'Verwarmingskabel of -mat',
    description:
      'Elektrische vloerverwarming via verwarmingskabels of -matten. Ideaal als aanvullende verwarming in badkamers, keukens of specifieke ruimtes.',
    longDescription:
      'Elektrische vloerverwarming is een ideale oplossing voor kleine ruimtes of als aanvulling op bestaande verwarming. De verwarmingskabels of -matten worden onder de tegels of laminaat gelegd en zorgen voor een aangenaam warm gevoel. Eenvoudig te installeren en te bedienen via een thermostaat.',
    features: [
      'Snel warm (thermostaat)',
      'Ideaal voor badkamer & keuken',
      'Eenvoudige installatie',
      'Geen waterleidingen',
      'Slimme bediening mogelijk',
      'Lage onderhoudskosten',
    ],
    specs: [
      { label: 'Opbouwhoogte', value: '3 – 5 mm' },
      { label: 'Installatietijd', value: 'Halve dag – 1 dag' },
      { label: 'Droogtijd', value: '24 uur' },
      { label: 'Vermogen', value: '80 – 200 W/m²' },
      { label: 'Aansturing', value: 'Slimme thermostaat' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    idealFor: ['Badkamers', 'Keukens', 'Kleine ruimtes', 'Aanvullende verwarming'],
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    highlighted: false,
  },
];
