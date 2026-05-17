import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FeedbackService {
    private filePath = path.join(process.cwd(), 'Data', 'feedback.json');

    getAllFeedback() {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data);
    }

    addFeedback(type: string, text: string) {
    const data = this.getAllFeedback();

    data[type].push({
        id: Date.now(),
        text,
        createdAt: new Date().toISOString(),
    });

    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));

    return {
        success: true,
    };
    }
}