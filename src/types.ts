export interface AssignedContents {
  id: string;
  name: string;
  description: string;
  topicId: number;
  isFavourite: boolean;
  assignments: {
    classId: number;
    subjectId: number;
    className: string;
    assignmentPeriod: 'Scheduled' | 'AllTime';
  };
  links: [
    {
      sourceName: string;
      sourceCode: string;
      contentId: string;
      url: string;
    }
  ];
}
