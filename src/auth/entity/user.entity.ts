import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { UserProfile } from "src/user/entity/user-profile.entity";

@Entity('user_profile')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @OneToOne(() => UserProfile )
    @JoinColumn({ name: 'user_profile_id' })
    user_profile: UserProfile;
}