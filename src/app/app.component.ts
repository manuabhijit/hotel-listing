import { Component } from "@angular/core";
import { SelectItem } from "primeng/components/common/selectitem";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  cars: any[];
  hotels;

  cols: any[];

  brands: any[];

  colors: SelectItem[];

  yearFilter: number;

  yearTimeout: any;

  constructor() {}

  ngOnInit() {
  

    this.cars = [
      {
        Location: "Neil",
        Name: "Deep Sea Resort (Standard Rooms)",
        cp: "3780.0",
        extraBed: "630.0",
        DinnerPerPerson: "472.5",
        Category: "Standard"
      },
      {
        Location: "Neil",
        Name: "Tango Beach Resort (Standard Rooms)",
        cp: "4305.0",
        extraBed: "1155.0",
        DinnerPerPerson: "525.0",
        Category: "premium "
      },
      {
        Location: "Neil",
        Name: "Holiday Inn Beach Resort(Neil Plaza)",
        cp: "5092.5",
        extraBed: "1890.0",
        DinnerPerPerson: "840.0",
        Category: "Deluxe "
      },
      {
        Location: "Neil",
        Name: "Summer Sands (casa earth )",
        cp: "6825.0",
        extraBed: "2940.0",
        DinnerPerPerson: "945.0",
        Category: "luxury "
      },
      {
        Location: "Neil",
        Name: "Vacation Village (Deluxe Rooms)",
        cp: "5775.0",
        extraBed: "1890.0",
        DinnerPerPerson: "630.0",
        Category: "luxury "
      },
      {
        Location: "Portblair",
        Name: "Pick up from Airport",
        cp: "315.0",
        extraBed: "630.0",
        DinnerPerPerson: "1260.0",
        Category: ""
      },
      {
        Location: "Portblair",
        Name: "Cove Beach",
        cp: "630.0",
        extraBed: "1260.0",
        DinnerPerPerson: "2520.0",
        Category: ""
      },
      {
        Location: "Portblair",
        Name: "Ross and North pick up",
        cp: "315.0",
        extraBed: "630.0",
        DinnerPerPerson: "1260.0",
        Category: "630 per person for tickets"
      },
      {
        Location: "Portblair",
        Name: "Ross and North Drop",
        cp: "315.0",
        extraBed: "630.0",
        DinnerPerPerson: "1260.0",
        Category: "630 per person for tickets"
      },
      {
        Location: "Portblair",
        Name: "Pheonix Bay Jetty",
        cp: "315.0",
        extraBed: "630.0",
        DinnerPerPerson: "1260.0",
        Category: ""
      },
      {
        Location: "Portblair",
        Name: "Pick up from Airport",
        cp: "315.0",
        extraBed: "630.0",
        DinnerPerPerson: "1260.0",
        Category: ""
      },
      {
        Location: "Portblair",
        Name: "Chriya Tappu",
        cp: "1260.0",
        extraBed: "2520.0",
        DinnerPerPerson: "5040.0",
        Category: ""
      },
      {
        Location: "Portblair",
        Name: "Shopping pickup and drop",
        cp: "525.0",
        extraBed: "1050.0",
        DinnerPerPerson: "2100.0",
        Category: ""
      },
      {
        Location: "Portblair",
        Name: "Baratang+LimeStone Caves+Volcano",
        cp: "4830.0",
        extraBed: "9660.0",
        DinnerPerPerson: "19320.0",
        Category: "650 per person for tickets"
      },
      {
        Location: "Portblair",
        Name: "Aiport Drop",
        cp: "315.0",
        extraBed: "630.0",
        DinnerPerPerson: "1260.0",
        Category: ""
      },
      {
        Location: "Havlock",
        Name: "2 Beaches | Pick up and Drop",
        cp: "2625.0",
        extraBed: "5250.0",
        DinnerPerPerson: "10500.0",
        Category: ""
      },
      {
        Location: "Neil",
        Name: "3 Beaches | Pick up and Drop",
        cp: "1260.0",
        extraBed: "2520.0",
        DinnerPerPerson: "5040.0",
        Category: ""
      },
      {
        Location: "Portblair",
        Name: "City Tour",
        cp: "420.0",
        extraBed: "630.0",
        DinnerPerPerson: "1050.0",
        Category: ""
      },
      {
        Location: "Portblair",
        Name: "S/L Show",
        cp: "262.5",
        extraBed: "525.0",
        DinnerPerPerson: "787.5",
        Category: "150 Per person for tickets"
      }
    ];

    for (let index in this.cars) {
      for (let key in this.cars[index]) {
        this.cars[index][key] = isNaN(this.cars[index][key]) ? this.cars[index][key].trim().toLowerCase() : Number(this.cars[index][key]);
      }
    }

    console.log(this.cars);
    
    this.brands = [
      { label: "All", value: null },
      { label: "Neil", value: "Neil" },
      { label: "Portblair", value: "Portblair" },
    ];

    this.colors = [
      { label: "Standard", value: "standard" },
      { label: "Deluxe", value: "deluxe" },
    ];

    this.cols = [
      { field: "Location", header: "Location" },
      { field: "Name", header: "Name" },
      { field: "cp", header: "Cost" },
      { field: "Extra Bed", header: "extraBed" },
      { field: "DinnerPerPerson", header: "Dinner" },
      { field: "Category", header: "Category" }
    ];
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, "cp", "gt");
    }, 250);
  }
}
