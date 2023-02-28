import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { UserProfile } from "src/user/entity/user-profile.entity";
import { Post } from "./post.entity";

@Entity('post_like')
export class PostLike {
    @PrimaryGeneratedColumn('uuid')
    id: number;
   
    @ManyToOne(() => UserProfile)
    @JoinColumn({ name: 'author_id' })
    author: UserProfile;

    @ManyToOne(() => Post)
    @JoinColumn({ name: 'post_id' })
    post: Post;
    
}