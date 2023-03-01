import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { UserProfile } from "src/user/entity/user-profile.entity";

@Entity('message')
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    text: string;

    @ManyToOne(() => UserProfile)
    @JoinColumn({ name: 'sender_id' })
    sender: UserProfile;

    @ManyToOne(() => UserProfile)
    @JoinColumn({ name: 'receiver_id' })
    receiver: UserProfile;

    
}