import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { UserProfile } from "src/user/entity/user-profile.entity";
import { PostLike } from "./post-like.entity";

@Entity('post')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    media: string;

    @Column()
    description: string;

    @ManyToOne(() => UserProfile)
    @JoinColumn({ name: 'user_profile_id' })
    user_profile: UserProfile;

    
}