import CategoryTitle from "@/components/common/CategoryTitle";
import { BASE_API } from "@/constants/common";
import { formatImageUrl } from "@/utills/common";
import Image from "next/image";

export const runtime = "edge";

export default async function Achievements() {
  const achievementResponse = await fetch(`${BASE_API}/general_files`);
  const { data: achievements } = await achievementResponse.json();
  return (
    <div>
      <CategoryTitle title="অর্জন" slug="অর্জন" link={false} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {achievements.map(
          (achievement: { directus_files_id: string; id: string }) => {
            return (
              <div
                key={achievement.id}
                className="h-[300px] md:h-[400px] w-full rounded-md"
              >
                <Image
                  src={`${formatImageUrl(achievement.directus_files_id)}`}
                  alt="image"
                  className="w-full h-full object-cover rounded-md"
                  width={500}
                  height={500}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
