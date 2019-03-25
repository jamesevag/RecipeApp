import {Component,OnInit,Output,EventEmitter} from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Message,SelectItem} from '../components/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username:string;
    pass:string;
    
    @Output() changeEvent = new EventEmitter<boolean>();
  
    constructor(private router: Router, private authService: AuthService) { }
  
    ngOnInit() {
    }
  
    onLoadServer(id: number) {
      // complex calculation
      this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
    }
  
    onLogin() {
      this.authService.login();
      if(this.pass==='evag'){
        this.changeEvent.emit(true);
      }
    }
  
    onLogout() {
      this.authService.logout();
    }
}
