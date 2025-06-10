import { ComboBox, ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { Header } from "~/components";
import type { Route } from "./+types/create-trips";


export const loader = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data.map((country: any) => ({
    name: country.flag + country.name.common,
    coordinates : country.latlng,
    value : country.name.common,
    openStreetMap : country.maps?.openStreetMaps
  }));
}

const createTrips = ({loaderData}: Route.ComponentProps) => {

    const handleSubmit = () => {
       const countries = loaderData as Country[]; 
       console.log(countries);

       const countryData = countries.map((country: any) => ({
         text : country.name,
         value : country.value
       }))
    };

  return (
    <main className="flex flex-col gap-10 pb-20 wrapper">
      <Header
        title="Add a New Trip"
        description="View and Edit AI Generated Trips"
      />
      <section className="mt-2.5 wrapper-md">
        <form className="trip-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country">
              Country
            </label>
            <ComboBoxComponent id="country" dataSource={countryData} fields={{text: 'text', value: 'value'} } placeholder="Select a country" className="combo-box"/>
          </div>
        </form>
      </section>
    </main>
  );
};

export default createTrips;
