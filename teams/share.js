// Generated by CoffeeScript 1.6.3
var BALL_R, GOAL_WIDTH, HALF_GOAL_WIDTH, MAX_DASH_FORCE, MAX_KICK_FORCE, MY_GOAL_POS, OP_GOAL_POS, PENALTY_AREA_LENGTH, PENALTY_AREA_WIDTH, PITCH_HALF_LENGTH, PITCH_HALF_WIDTH, PITCH_LENGTH, PLAYER_R, in_my_penalty, is_goalie, player_near_ball;

PITCH_LENGTH = 1050;

PITCH_HALF_LENGTH = 525;

PITCH_HALF_WIDTH = 340;

BALL_R = 2.5;

PLAYER_R = 6.5;

MAX_DASH_FORCE = 6;

MAX_KICK_FORCE = 2.2;

GOAL_WIDTH = 140.2;

HALF_GOAL_WIDTH = 70.1;

PENALTY_AREA_LENGTH = 165;

PENALTY_AREA_WIDTH = 403.2;

MY_GOAL_POS = [-PITCH_HALF_LENGTH, 0];

OP_GOAL_POS = [PITCH_HALF_LENGTH, 0];

is_goalie = function(teamnum) {
  return teamnum === 0;
};

in_my_penalty = function(pos) {
  return (pos[0] < -PITCH_LENGTH / 2 + PENALTY_AREA_LENGTH) && (Math.abs(pos[1]) < PENALTY_AREA_WIDTH / 2);
};

player_near_ball = function(teammates, ball) {
  var dis, i, min, num, player, _i, _len;
  min = PITCH_LENGTH;
  num = -1;
  i = 0;
  for (_i = 0, _len = teammates.length; _i < _len; _i++) {
    player = teammates[_i];
    dis = Vector2d.distance(player, ball);
    if (dis <= min) {
      min = dis;
      num = i;
    }
    i += 1;
  }
  return num;
};