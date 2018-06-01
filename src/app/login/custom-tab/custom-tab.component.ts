import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TabOption} from '../../models/TabOption';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css']
})
export class CustomTabComponent implements OnInit {
  tabForm: FormGroup;
  tabOption;

  constructor(fb: FormBuilder) {
    this.tabOption = new TabOption({
      firstInputPlaceholder: '111'
    });

    const controlsConfig = this.getControlsConfig(this.tabOption);
    this.tabForm = fb.group(controlsConfig);
  }

  ngOnInit() {
  }

  private getControlsConfig(tabOption: TabOption) {
    const initValue = null;

    return {
      [tabOption.firstInputName]: [initValue, tabOption.firstInputValidators],
      [tabOption.secondInputName]: [initValue, tabOption.firstInputValidators]
    };
  }

}
