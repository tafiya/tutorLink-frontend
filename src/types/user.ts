export interface IUser  {
  _id: string
      name?: string;
      address?: string;
      phone?: string;
      email: string;
      password?: string;
      role: 'Student' | 'Tutor';
      bio?: string;
      price?:number;
      subjects?: string;
      gradeLevel?: string; 
      averageRating?: number;
      profilePicture?: string;
      availability?: {
        from: Date; // Start date of availability
        to: Date; // End date of availability
      };
      isBlocked?: boolean;
      isDeleted?: boolean;
      createdAt?: Date;
      updatedAt?: Date;
    }

    export interface IBlog {
      id: number;
      date: string;
      title: string;
      detail: string;
      image: string;
      about: string;
    }