import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Beer } from 'src/app/models/Beer';
import { BeerService } from 'src/app/services/beer.service';
import { MatTableDataSource } from '@angular/material/table';
import { PipeNamePipe } from 'src/app/shared/pipes/pipe-name.pipe';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  titles = ["NAME", "DESCRIPTION", "YEAST", "BREWED", "HOPS", "MALT", "FOOD"];
  beers = new MatTableDataSource<Beer>();
  defaultBeers: Beer[] = [];
  searchText: string = ''

  constructor(
    private beerService: BeerService,
    private toastr: ToastrService,
    private pipeName: PipeNamePipe
  ) {

  }

  ngOnInit(): void {
    this.getAllBeers();
  }

  getAllBeers() {
    this.beerService.getAllBeers().subscribe({
      next: data => {
        this.beers.data = data;
        this.defaultBeers = data;
      },
      error: error => {
        this.toastr.error("NO DATOS DE LAS CERVEZAS NO OBTENIDOS")
      }
    })
  }

  filterValue(event: any) {
    let search: string = event.detail.value
    search = search.trimEnd().trimStart().toLocaleLowerCase()
    if (search.length == 0) {
      this.beers.data = this.defaultBeers;
    }
    else {

      this.beers.data = this.defaultBeers.filter(beer => {

        return beer.name.toLocaleLowerCase().includes(search)
          || beer.description.toLocaleLowerCase().includes(search)
          || beer.ingredients.yeast.toLocaleLowerCase().includes(search)
          || this.pipeName.transform(beer.ingredients.hops).toLocaleLowerCase().includes(search)
          || this.pipeName.transform(beer.ingredients.malt).toLocaleLowerCase().includes(search)
          || beer.food_pairing.filter(food => food.toLocaleLowerCase().includes(search)).length > 0;
      })
    }
  }
}

/*

*/
