import { CopyIcon, StageIcon } from '@/assets';
import { Button, Card } from '@/components';
import { useProfile } from '@/hooks';
import { cn, copyToClipboard, getDirectLink, shareOnX } from '@/lib';

export const Friends = () => {
  const noInvites = true;
  const { profile } = useProfile();

  const inviteLink = getDirectLink(profile.invite_code);

  function inviteFriend() {
    const tweet = `🚀 This is a REVOLUTION with My Best Friends!%0A%0A 🔥Claim your badge, level up your 💰Honors by joining me: ${inviteLink}%0A%0A Your Badge, Your Honor, Your Earning.`;

    shareOnX(tweet);
  }

  return (
    <div className="animate-fade-right p-11">
      <h2 className="text-center">
        <p className="mx-auto w-fit bg-silver-text bg-clip-text font-montserrat-semibold text-[32px] leading-[44px] text-transparent">
          Your Friends
        </p>

        <p className="mx-auto w-fit bg-silver-text bg-clip-text font-montserrat-semibold text-[32px] leading-[44px] text-transparent">
          Your <span className="bg-orange-text bg-clip-text">Honors</span>
        </p>

        <StageIcon className="mt-7" />
      </h2>

      <div className="mt-7 px-5">
        <p className="font-montserrat-semibold text-sm">Rules:</p>

        <div className="mt-3 text-xs leading-[18px] text-[#898989]">
          You can earn 300 honors for each friend you invite who joins Omni Badge and claims at least one badge.
        </div>

        <p className="mt-10 font-montserrat-medium text-xs leading-[18px] text-[#898989]">
          You’ve earned <span className="text-white">0 honors</span> from friends
        </p>
      </div>

      <Card className={cn('mt-7 max-h-80 min-h-24', noInvites && 'grid place-items-center')}>
        <span className="mx-auto text-xs text-[#898989]">No Invites</span>
      </Card>

      <div className="mt-11 flex items-center gap-3">
        <Button onClick={inviteFriend} variant="orange" className="h-12 flex-1 text-lg">
          Invite friends
        </Button>

        <button
          onClick={() => copyToClipboard(inviteLink)}
          className="grid size-12 place-items-center rounded-full bg-white"
        >
          <CopyIcon />
        </button>
      </div>
    </div>
  );
};
