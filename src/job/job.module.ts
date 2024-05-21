import { Module } from '@nestjs/common';
import { JobService } from './services/job.service';
import { JobController } from './controllers/job.controller';
import { FilterModule } from 'src/filter/filter.module';
import JobsSearchService from './services/jobSearch.service';
import { Job, JobSchema } from './schemas/job.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchModule } from 'src/search/search.module';
import { JobRepository } from './repositories/job.repository';
import { UserJobController } from './controllers/user-job.controller';
import { UserJobService } from './services/user-job.service';
import { UserJob, UserJobSchema } from './schemas/user-job.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }]),
    MongooseModule.forFeature([{ name: UserJob.name, schema: UserJobSchema }]),
    FilterModule,
    SearchModule,
  ],
  controllers: [JobController, UserJobController],
  exports: [JobService, JobRepository, UserJobService],

  providers: [JobService, UserJobService, JobsSearchService, JobRepository],
})
export class JobModule {}
