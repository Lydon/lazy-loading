import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: '',
			component: RegisterComponent
		}])
	],
	declarations: [
		RegisterComponent
	]
})
export class RegisterModule {}
