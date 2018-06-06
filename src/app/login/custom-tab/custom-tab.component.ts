import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TabOption} from '../../models/TabOption';
import {ITabPayload} from '../../models/ITabPayload';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css']
})
export class CustomTabComponent implements OnInit {
  tabForm: FormGroup;
  @Input() tabOption: TabOption;
  @Output() tabSubmit = new EventEmitter<ITabPayload>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    const controlsConfig = this.getControlsConfig(this.tabOption);
    this.tabForm = this.fb.group(controlsConfig);
  }

  submitTab() {
    if (this.tabForm.invalid) {
      return;
    }

    this.tabSubmit.emit(this.tabForm.value);
  }

  private getControlsConfig(tabOption: TabOption) {
    const initValue = null;

    return {
      [tabOption.firstInputName]: [initValue, tabOption.firstInputValidators],
      [tabOption.secondInputName]: [initValue, tabOption.secondInputValidators]
    };
  }

}
