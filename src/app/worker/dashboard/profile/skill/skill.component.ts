import { ToastrService } from 'ngx-toastr';
import { WorkerService } from './../../../../shared/services/worker.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-worker-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill: string;
  @Input() description: string;
  @Input() rate: string;
  @Input() skillId: number;

  constructor(
    private workerService: WorkerService,
    private userSrvice: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  deleteSkill(id) {
    const userId = this.userSrvice.getUserId();
    this.workerService.deleteWorkerSkill(userId, id).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Skill deleted');
      }
    );
  }

}
