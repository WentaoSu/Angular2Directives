import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './App.component';
import { HighlightDirective } from './highlight.directive';
import { ToggleHighLightDirective } from './toggle-high-light.directive';
import { UnlessDirective } from './unless.directive';


@NgModule({
    declarations: [AppComponent, HighlightDirective, ToggleHighLightDirective, UnlessDirective],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }
