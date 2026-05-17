import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service'

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) {}

    @Get()
    getFeedback() {
    return this.feedbackService.getAllFeedback();
    }

    @Post()
    addFeedback(
    @Body() body: { type: string; text: string },
    ) {
    return this.feedbackService.addFeedback(body.type, body.text);
    }
}
