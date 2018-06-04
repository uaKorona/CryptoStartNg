import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TabOption} from '../../models/TabOption';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css']
})
export class CustomTabComponent implements OnInit {
  tabForm: FormGroup;
  @Input() tabOption: TabOption;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    const controlsConfig = this.getControlsConfig(this.tabOption);
    this.tabForm = this.fb.group(controlsConfig);
  }

  private getControlsConfig(tabOption: TabOption) {
    const initValue = null;

    return {
      [tabOption.firstInputName]: [initValue, tabOption.firstInputValidators],
      [tabOption.secondInputName]: [initValue, tabOption.firstInputValidators]
    };
  }

}
