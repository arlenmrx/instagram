import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { UserProfile } from "./user-profile.entity";

@Entity('subscriptions')
export class Subscriptions {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToMany(() => UserProfile)
    @JoinTable({ name: 'follower_id'})
    follower: UserProfile;

    @ManyToMany(() => UserProfile)
    @JoinTable({ name: 'to_subs_id'})
    subscribe: UserProfile;

    
}