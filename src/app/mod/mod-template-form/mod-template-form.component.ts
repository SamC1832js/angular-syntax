import { Component, OnInit } from '@angular/core';
import { ModService } from '../../service/mod.service';
import { Mod, ModType } from '../models/mod';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-mod-template-form',
  templateUrl: './mod-template-form.component.html',
  styleUrls: ['./mod-template-form.component.css'],
})
export class ModTemplateFormComponent implements OnInit {
  mod!: Mod;
  modType: ModType[] = [
    {
      key: 0,
      value: 'Free',
    },
    {
      key: 1,
      value: 'Paid',
    },
  ];
  constructor(
    private modService: ModService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      const id = parseInt(data.id || '1', 10);
      this.modService.getMod(id).subscribe((mod) => {
        console.log(mod);
        this.mod = mod;
      });
    });
  }
  back() {
    this.router.navigate(['/mod']);
  }

  handleSubmit(object: any) {
    console.log(object);
  }
}
