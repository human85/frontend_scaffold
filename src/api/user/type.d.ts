declare module API {
  type Profile = {
    id: number;
    tg_uid: number;
    username: string;
    slots: number;
    honor: number;
    last_farm_time: string | null;
    last_claim_time: any;
    last_daily_time: any;
    invite_code: string;
    invited_by_tg_uid: any;
    invite_reward: number;
    createtime: string;
    updatetime: string;
    inviter: any;
    build: any;
    user_badge_relations: UserBadgeRelation[];
  };

  type UserBadgeRelation = {
    id: number;
    badge_id: number;
    tg_uid: number;
    is_shared: number;
    badge: Badge;
  };

  type Badge = {
    id: number;
    name: string;
    cover: string;
    desc: string;
    consume_slots: number;
    base_effects: number;
    badge_comb_relations: any[];
  };
}
